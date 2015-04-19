from django.shortcuts import render


def index(request):

    return render(request, 'crash_wine/index.html')
