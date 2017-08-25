from django.shortcuts import render,redirect
from . import models


# Create your views here.


def index(request):
    articles = models.Article.objects.all()
    return render(request, 'blog/index.html', {'articles': articles})


def article_page(request, article_id):
    article = models.Article.objects.get(pk=article_id)
    return render(request, 'blog/article_page.html', {'article': article})


def article_change(request, article_id):
    request.session['alert'] = "no_warning"
    if str(article_id) == '0':
        return render(request, 'blog/add_page.html').set_cookie("postToken", value="allow")
    else:
        article = models.Article.objects.get(pk=article_id)
        return render(request, 'blog/add_page.html', {'article': article})


def edt_action(request):
    title = request.POST.get('title', 'TITLE')
    content = request.POST.get('content', 'CONTENT')
    time = request.POST.get('time', 'TIME')
    article_id = request.POST.get('article_id', '0')
    try:
        article = models.Article.objects.get(title=title)
        exist = True
    except:
        exist = False
    if not exist or (article_id != 0 and str(article.id) == str(article_id)):
        request.session["alert"] = "Yes"
        if str(article_id) == '0':
            models.Article.objects.create(title=title, content=content,time=time)
        else:
            article = models.Article.objects.get(pk=article_id)
            article.title = title
            article.content = content
            article.save()
        articles = models.Article.objects.all()
        if request.COOKIES["postToken"] == "allow":
            return render(request, 'blog/index.html', {'articles': articles}).set_cookie("postToken",value="disable")
    else:
        request.session['alert'] = "warning"
        alert = "warning"
        if str(article_id) == '0':
            return render(request, 'blog/add_page.html', {'Alert': alert})
        else:
            return redirect("/index/edt/"+article_id+"/")
            return render(request, 'blog/add_page.html', {'Alert': alert, 'article': models.Article.objects.get(pk=article_id)})