# Guía de Optimización SEO - Fundación Sonrisas

## ✅ Optimizaciones Implementadas

### 1. Static Site Generation (SSG)
- Cambiado de `force-dynamic` a generación estática con revalidación
- `revalidate: 3600` - La página se regenera cada hora
- HTML pre-renderizado para crawlers de búsqueda

### 2. Metadata Completa
- **Open Graph**: Para compartir en redes sociales
- **Twitter Cards**: Optimizado para Twitter
- **Keywords**: Palabras clave relevantes
- **Robots**: Configuración para crawlers

### 3. Archivos SEO Esenciales
- ✅ `sitemap.xml` - Mapa del sitio generado automáticamente
- ✅ `robots.txt` - Instrucciones para crawlers
- ✅ `manifest.json` - PWA y app móvil
- ✅ JSON-LD - Datos estructurados para Google

### 4. Datos Estructurados (Schema.org)
- Tipo: NGO (Organización sin fines de lucro)
- Información de contacto
- Redes sociales
- Logo y descripción

## 🚀 Próximos Pasos

### Antes de Desplegar:
1. **Actualiza la URL base** en:
   - `app/layout.tsx` → `metadataBase`
   - `app/sitemap.ts` → `baseUrl`
   - `app/robots.ts` → `sitemap`
   - `components/structured-data.tsx` → URLs

2. **Reemplaza imágenes placeholder**:
   - Agrega una imagen OG de 1200x630px en `/public/og-image.jpg`
   - Actualiza en `app/layout.tsx` la ruta de la imagen

3. **Actualiza redes sociales**:
   - En `components/structured-data.tsx` → URLs reales de redes

### Después de Desplegar:

1. **Google Search Console**:
   - Registra tu sitio en https://search.google.com/search-console
   - Envía el sitemap: `https://tu-dominio.com/sitemap.xml`

2. **Verifica SEO**:
   - Lighthouse (Chrome DevTools) → Performance y SEO
   - https://pagespeed.web.dev/
   - https://search.google.com/test/rich-results

3. **Monitoreo**:
   - Google Analytics
   - Vercel Analytics (ya incluido)

## 📊 Beneficios SEO

- ✅ HTML estático = Carga instantánea para crawlers
- ✅ Metadata completa = Mejor ranking en búsquedas
- ✅ Open Graph = Previews atractivos en redes sociales
- ✅ Sitemap = Indexación más rápida
- ✅ Datos estructurados = Rich snippets en Google
- ✅ Revalidación = Contenido actualizado sin rebuild manual

## 🔧 Comandos Útiles

```bash
# Build para producción
pnpm build

# Verificar sitemap localmente
# Visita: http://localhost:3000/sitemap.xml

# Verificar robots.txt
# Visita: http://localhost:3000/robots.txt
```

## 📝 Notas

- La revalidación está configurada a 1 hora (3600 segundos)
- Puedes ajustar este valor en `app/page.tsx`
- Para contenido que cambia raramente, aumenta el tiempo
- Para contenido dinámico, reduce el tiempo o usa ISR
