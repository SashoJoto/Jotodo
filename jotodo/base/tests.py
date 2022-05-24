from django.test import TestCase
from models import Task


# Create your tests here.
class URLTests(TestCase):
    def test_home_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_login_page(self):
        response = self.client.get('login/')
        self.assertEqual(response.status_code, 200)

    def test_register_page(self):
        response = self.client.get('register/')
        self.assertEqual(response.status_code, 200)

    def task_create_page(self):
        response = self.client.get('task-create/')
        self.assertEqual(response.status_code, 200)

    # You can do test for each page


class UserTests(TestCase):
    def is_logged_in(self):
        self.assertEqual(Task.user.is_authenticated, True)
