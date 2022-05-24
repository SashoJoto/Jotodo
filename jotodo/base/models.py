from django.db import models
from django.contrib.auth.models import User
import datetime


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    complete = models.BooleanField(default=False)
    important = models.BooleanField(default=False)
    today = datetime.date.today()
    due_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title

    def is_past_due(self):
        print(self.due_date)
        print(datetime.date.today())

    class Meta:
        # Sorts tasks by complete - sends complete tasks to the bottom of list
        ordering = ['complete', '-important']
