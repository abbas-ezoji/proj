from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt

class CreateUserAPIView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        user = request.data
        serializer = UserSerializer(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny, ])
def userdetails(request):
    data = request.data
    user_details = {}
    try:
        username = data['username']
        password = data['password']
        print(username)
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    try:
        user = get_object_or_404(User, username=username, password=password)
    except:
        user_details['error'] = 'نام کاربری یا رمز صحیح نیست'
        return Response(user_details, status=status.HTTP_401_UNAUTHORIZED)
    try:
        user_token = user.auth_token.key
    except:
        user_token = Token.objects.create(user=user)
    if user:
        try:
            user_details['error'] = ''
            user_details['name'] = "%s %s" % (user.first_name, user.last_name)
            user_details['token'] = user_token
            return Response(user_details, status=status.HTTP_200_OK)
        except Exception as e:
            raise e
    else:
        user_details['error'] = 'کاربر وجود ندارد'
        return Response(user_details, status=status.HTTP_403_FORBIDDEN)

