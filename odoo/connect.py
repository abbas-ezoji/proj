#https://www.odoo.com/documentation/12.0/webservices/odoo.html
from xmlrpc import client

class set_model():
    url = 'http://192.168.1.50:8069'
    db = 'mydb'
    username = 'abbas.ezoji@gmail.com'
    password = '1qaz!QAZ'
    def get_models(self):
        models = client.ServerProxy('{}/xmlrpc/2/object'.format(self.url))
        return models
    def get_common(self):
        common = client.ServerProxy('{}/xmlrpc/2/common'.format(self.url))
        return common
    def get_version(self):
        common = self.get_common()
        version = common.version()
        return version
    def get_uid(self):
        common = self.get_common()
        uid = common.authenticate(self.db, self.username, self.password, {})
        return uid

