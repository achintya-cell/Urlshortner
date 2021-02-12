from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Url
from .forms import UrlForm
import uuid,json

# Create your views here.


def index(request):
    form = UrlForm()
    data = {
        'form' : form,
    }
    return render(request, 'index.html',data)


def create(request):
    if request.method == 'POST':
        link = request.body[9:-2].decode("utf-8")
        # print(request.body[9:-2].decode("utf-8"))
        # print("came....")
        uid = str(uuid.uuid4())[:5]
        new_url = Url(link=link,uuid=uid)
        new_url.save()
        return HttpResponse(uid)
    else:
        return HttpResponse('Nice try......')


def go(request,pk):
    url_details = Url.objects.get(uuid=pk)
    return redirect(url_details.link)