from django.db import models

class Registeration(models.Model):
    email = models.EmailField(max_length=254)
    password = models.TextField(max_length=100)
    verification=models.BooleanField(default=False)