from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model



class Command(BaseCommand):
    users = [{'email': 'admin@admin.ru', 'username': 'admin', 'firstname': 'super', 'lastname': 'admin'},
             {'email': 'user1@user.ru', 'username': 'user1', 'firstname': 'John', 'lastname': 'Brown'},
             {'email': 'user2@user.ru', 'username': 'user2', 'firstname': 'Jim', 'lastname': 'Green'},
             {'email': 'user3@user.ru', 'username': 'user3', 'firstname': 'Joe', 'lastname': 'Black'}]
    help = 'Create superuser admin and 3 users'

    def handle(self, *args, **options):
        User = get_user_model()
        for c_user in self.users:
            user, created = User.objects.update_or_create(**c_user)
            if c_user['username'] == 'admin':
                user.is_staff = True
                user.is_superuser = True
            user.set_password(c_user['username'])
            user.save()
            if created:
                self.stdout.write(
                    self.style.SUCCESS(f"User {user.username} created.\nemail: {user.email}\npassword: {user.username}\n"))
            else:
                self.stdout.write(
                    self.style.SUCCESS(
                        f"User {user.username} updated.\nemail: {user.email}\npassword: {user.username}\n"))

