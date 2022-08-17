from weakref import proxy
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

task_status_choices = (
    ("Completed", "Completed"),
    ("Ongoing", "Ongoing"),
    ("Pending", "Pending"),
)

approval_status_choices = (
    ("Approved", "Approved"),
    ("Rejected", "Rejected"),
    ("Pending", "Pending"),
)




class Task(models.Model):

    task_name = models.CharField(max_length=120)
    task_id = models.IntegerField()
    task_status = models.CharField(max_length=20, choices=task_status_choices, default="Completed")
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created_date = models.DateField()
    approval_status = models.CharField(max_length=20, choices=approval_status_choices, default="Approved")
    assigned_manager = models.CharField(max_length=50)
    task_description = models.CharField(max_length=360)
    


class User(AbstractUser):

    class TypeOfUsers(models.TextChoices):
        EMPLOYEE = "EMPLOYEE","Employee"
        MANAGER = "MANAGER", "Manager"

    type = models.CharField(
        ("Type"),max_length=50, choices=TypeOfUsers.choices, default=TypeOfUsers.EMPLOYEE
    )
    user_id = models.IntegerField(default=0)
    department = models.CharField(max_length=60, default="")
    designation = models.CharField(max_length=60, default="")

class Employee(User):
    class Meta:
        proxy = True

class Manager(User):
    class Meta:
        proxy = True