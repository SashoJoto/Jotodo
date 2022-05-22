from django.db import models
from django.contrib.auth.models import User
from django import forms
from datetime import datetime, timedelta


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    complete = models.BooleanField(default=False)
    important = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        # Sorts tasks by complete - sends complete tasks to th
        ordering = ['complete', '-important']
