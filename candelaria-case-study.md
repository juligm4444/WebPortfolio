# Candelaria Website

**Diseñar, construir y desplegar la presencia digital de un equipo universitario de competición de alto rendimiento.**

`Fullstack` · `UI/UX` · `E-Commerce` · `Gamification` · `2025–2026`

---

## Overview

Candelaria es la presencia digital completa de un equipo universitario de ingeniería de competición. El sitio va más allá de un portafolio estático: integra gestión de miembros, publicaciones, membresías, donaciones, tienda de merchandise y un sistema de gamificación para seguidores, todo bajo una identidad visual cinética y de alto contraste.

El proyecto nació de la necesidad de centralizar la comunicación del equipo, facilitar el apoyo externo y ofrecer una experiencia de usuario a la altura del nivel técnico del equipo. Desde la arquitectura de base de datos hasta la paleta de color, cada decisión fue tomada con criterio de producto y de ingeniería.

---

## The Problem

Los equipos universitarios de competición suelen quedarse con soluciones parciales: una cuenta de Instagram, un PDF con sus logros y un link de donaciones genérico. Candelaria necesitaba algo diferente:

- Una plataforma que refleje la identidad técnica y visual del equipo.
- Un sistema que permita a seguidores externos apoyar económicamente con trazabilidad real.
- Un panel interno donde los líderes puedan gestionar miembros, publicaciones y roles sin tocar código.
- Soporte para dos mercados de pago: internacional (Stripe) y Colombia (PayU).
- Un incentivo de largo plazo para que los seguidores sigan involucrados: **gamificación**.

---

## Development Process

### Research & Design System
- Definición del sistema visual "Neon Velocity" en **Figma**: tipografía, paleta de color, componentes y grids.
- Diseño de 6 pantallas finales (Home, Vehicle, Team, Publications, Support, About) con enfoque mobile-first y scrolling vertical cinematográfico.
- Construcción del design system con **Tailwind CSS 4** y **Class Variance Authority (CVA)** para variantes de componentes.

### Architecture & Backend
- Diseño del modelo de datos en **PostgreSQL** con **Django 4.2** y **Django REST Framework**: 13+ modelos cubriendo equipos, miembros, publicaciones, pagos y tiers.
- Sistema de autenticación dual con **djangorestframework-simplejwt**: usuarios internos (equipo, líderes) y usuarios externos (seguidores).
- Whitelist segura para la asignación de roles de liderazgo, con flujo de aprobación manual y logging de auditoría.
- Integración con **Supabase** para sincronización de perfiles, almacenamiento de media y funciones de gamificación en PL/pgSQL.

### Frontend & Integrations
- SPA en **React 19** con **React Router DOM 7** y **Vite 7**.
- Internacionalización completa (español/inglés) con **i18next**.
- Carrito de compras y flujo de checkout con **Stripe** y **PayU**, incluyendo webhook handlers con verificación HMAC-SHA256.
- Sistema de tiers de seguidores (Visitor → Core) calculado en tiempo real sobre donaciones acumuladas y meses de membresía.

### Performance & Deployment
- Optimización de queries con `select_related()`, `prefetch_related()` y `.only()` en Django ORM.
- Compresión de imágenes con `vite-plugin-imagemin` y servicio de media vía **Supabase Storage**.
- Despliegue monolítico en **Vercel**: frontend en `/`, backend Django en `/api/*`.

---

## Tools & Technologies

| Área | Herramientas |
|------|-------------|
| **Design** | Figma |
| **Frontend** | React 19, React Router DOM 7, Vite 7, Tailwind CSS 4, i18next |
| **UI Components** | Radix UI, Lucide React, CVA |
| **Backend** | Django 4.2, Django REST Framework, djangorestframework-simplejwt |
| **Database** | PostgreSQL, Supabase |
| **Storage** | Supabase Storage |
| **Payments** | Stripe, PayU |
| **Auth** | JWT, bcrypt (12 rounds), Supabase Auth |
| **Testing** | Vitest, React Testing Library, jsdom |
| **Deployment** | Vercel |
| **Security** | CSRF middleware, Rate limiting, HMAC webhooks, Audit logging |

---

## Visual Design

### Design System: "Neon Velocity"

Una estética **cinética, de alto contraste y narrativa editorial**, inspirada en la telemetría de motorsport y el diseño técnico de alta precisión.

#### Color Palette

| Color | Hex | Uso |
|-------|-----|-----|
| Deep Space Black | `#0A0A0A` – `#111111` | Fondos principales |
| Graphite Night | `#1A1A1A` – `#222222` | Cards, Navbar, superficies elevadas |
| Electric Violet | `#9B55F6` | Acción primaria, acento de marca |
| Plasma Cyan | `#00E5FF` – `#22D3EE` | Énfasis técnico, acciones secundarias |
| Soft Light Gray | `#D1D5DB` – `#E5E7EB` | Cuerpo de texto sobre fondos oscuros |
| Signal White | `#F8FAFC` – `#FFFFFF` | Titulares y métricas clave |
| Success Neon Green | `#22C55E` | Indicadores de estado positivo |

#### Typography

**Space Grotesk** — geométrica sans-serif para toda la interfaz.

- Headlines: Heavy, compacto, alto contraste
- Section headings: Semi-bold, tracking ajustado
- Body text: Regular/medium, line-height generoso
- Data labels: Medium, letter-spacing aumentado

#### Component Patterns

- **Buttons**: Pill / rounded rect, relleno violeta, hover con transición confiada
- **Cards**: Bordes suavemente redondeados, fondo grafito, sutil glow
- **Forms**: Campos oscuros rellenos, focus rings violeta/cian
- **Layout**: Scrolling vertical largo, ritmo fuerte de secciones, grandes espacios en hero y CTAs

---

## Key Features

### Authentication & User Management
Sistema de doble perfil: usuarios internos (miembros del equipo) con whitelist y roles de liderazgo, y usuarios externos (seguidores y compradores). Flujo completo de registro, login, recuperación de contraseña y gestión de perfil.

### E-Commerce & Payments
Tienda de merchandise (hoodie, gorra, botella), membresías en 3 niveles ($5 / $10 / $25 USD), donaciones libres en COP/USD. Carrito persistente, checkout con Stripe (internacional) y PayU (Colombia), historial de compras por usuario.

### Gamification: Supporter Tiers

| Tier | Puntuación mínima |
|------|------------------|
| Visitor | 0 |
| Supporter | 1+ COP |
| Bronze | 20,000 COP |
| Silver | 60,000 COP |
| Gold | 150,000 COP |
| Core | 300,000 COP |

El score se calcula como: `total donado (COP) + meses de membresía × 5,000 COP`. Calculado en PL/pgSQL en Supabase y expuesto vía API REST.

### Internal Dashboard
Panel exclusivo para miembros del equipo: gestión de integrantes, asignación de roles, publicación de artículos con PDFs, administración de whitelist de líderes y revisión de transacciones.

### Multilingual Support
Soporte completo en español e inglés con i18next. Todos los modelos del backend almacenan campos en ambos idiomas (`_en` / `_es`) y la API responde según el parámetro de idioma.

---

## Performance Results

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Publications List Load | 2.5 s | 0.8 s | **68% más rápido** |
| Team Page Load | 1.8 s | 0.5 s | **72% más rápido** |
| Members API Queries | 50 | 8 | **84% menos queries** |
| Publications API Queries | 40 | 10 | **75% menos queries** |

---

## Security

- Hashing con **bcrypt** (12 rounds)
- Rate limiting en endpoints de auth (10 req/min) y brute-force protection (8 intentos / 15 min)
- Verificación de webhooks con **HMAC-SHA256** y tolerancia de timestamp (5 min)
- Procesamiento idempotente de pagos para evitar doble contabilización
- **Audit logging** de todas las acciones administrativas
- Middleware de seguridad: CSRF, CORS configurado, headers de seguridad

---

## Reflections

Candelaria fue el proyecto que me obligó a pensar como product engineer, no solo como desarrolladora. Tomar decisiones de arquitectura —cuándo usar Django vs Supabase, cómo modelar el sistema de tiers, cómo abstraer dos proveedores de pago— requirió razonar sobre trade-offs reales, no solo implementar features.

El mayor aprendizaje fue diseñar para dos audiencias con necesidades completamente distintas: un seguidor externo que quiere apoyar con un clic, y un líder de equipo que necesita administrar personas y publicar contenido. Construir una sola plataforma que sirva a ambos sin que ninguno sienta que la interfaz no fue pensada para él fue el reto de diseño más interesante del proyecto.
