import shutil
import os

def new_html(src, dst):
    new_html = ''
    with open(src,'r') as f:
        for line in f:
            for word in line.split():
                #print(word)
                if ('<head>' in word):
                    #print(word)
                    word = word.replace('<head>','<head> {% load static %} ')
                    #print(word)
                if (word[:5] == 'href='):
                    #print(word)
                    word = word.replace('="/','="{% static \'react_statics/')
                    word = word.replace('css"','css\' %}"')
                    word = word.replace('ico"','ico\' %}"')
                    word = word.replace('json"','json\' %}"')
                    #print(word)
                if (word[:4] == 'src='):
                    #print(word)
                    word = word.replace('="/','="{% static \'react_statics/')
                    word = word.replace('js"','js\' %}"/>')
                    #print(word)

                new_html = new_html + ' ' +word
    nf = open(dst,'w+')
    nf.write(new_html)
    nf.close()
    print(new_html)
def copytree(src, dst, symlinks=False, ignore=None):
    if os.path.exists(dst) and os.path.isdir(dst):
        shutil.rmtree(dst)
    if not os.path.exists(dst):
        os.makedirs(dst)
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)
src = 'D:/templates/React/my-app/build'
dst = 'D:/application/proj/app1/static/react_statics'
copytree(src,dst)
indexHtml = os.path.join(dst, 'index.html')
indexHtmlReact = os.path.join(dst, 'index_react.html')
indexHtmlReact_templates = os.path.join('D:/application/proj/app1/templates', 'index_react.html')
shutil.copy2(indexHtml, indexHtmlReact)
new_html(indexHtml, indexHtmlReact)
shutil.copy2(indexHtmlReact, indexHtmlReact_templates)