from django.urls import path
from contact import views

urlpatterns = [
    path("api/contact/", views.contact_submit),
]
