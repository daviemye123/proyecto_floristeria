from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
path('admin/', admin.site.urls),
path('', include('core.urls')), # URLs de core
# path('productos/', include('productos.urls')), # Otras apps
] 