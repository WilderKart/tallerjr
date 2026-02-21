# Documentación del Proyecto: JR Taller de Motos SaaS

**Archivo:** `PROJECT_DOC.md`
**Estado:** 🟢 Etapa Inicial (MVP / Setup)
**Ubicación:** Raíz del Repositorio
**Última actualización:** 17/02/2026

---

## 1. Visión del Producto
Plataforma SaaS profesional para la gestión integral de talleres de motocicletas. El sistema busca centralizar inventario, ventas, facturación y gestión de clientes en una interfaz premium, minimalista y segura.

## 2. Alcance Inicial (MVP)
- **Gestión de Inventario**: Productos, categorías, control de stock.
- **Punto de Venta (POS)**: Registro de ventas, cálculo de comisiones.
- **Gestión de Taller**: Recepción de vehículos (Entradas).
- **Dashboard**: Panel principal con KPIs financieros.
- **Administración**: Gestión de usuarios y roles (Admin, Mecánico, Cajero).

## 3. Arquitectura General
- **Frontend/Backend**: Next.js 15 (App Router) - Unificado.
- **Estilos**: TailwindCSS (v4 compatible).
- **Base de Datos**: PostgreSQL con Prisma ORM.
- **Seguridad**: Zero Trust, HttpOnly Cookies, Middleware Next.js.

## 4. Stack Tecnológico
- **Framework**: Next.js 15 (React 19)
- **Estado Global**: Zustand
- **Estilos**: TailwindCSS (v4 compatible)
- **ORM**: Prisma ORM
- **Validación**: Zod
- **Autenticación**: NextAuth.js (Auth.js)
- **Base de Datos**: PostgreSQL
- **Infraestructura**: (Pendiente de definición para deploy).

## 5. Reglas de Seguridad (Zero Trust)
- **Autenticación**: Obligatoria para todas las rutas privadas vía JWT.
- **Autorización**: Middleware RBAC estricto verificar roles en cada request crítico.
- **Validación**: Todo input debe ser validado con Zod en el backend. Backend es la única fuente de verdad.
- **Datos**: Soft delete por defecto.

## 6. Contratos API v1 (Preliminar)
- `/api/auth/*`: Login, registro, refresh token.
- `/api/users/*`: Gestión de usuarios.
- `/api/inventory/*`: Productos y stock.
- `/api/sales/*`: Ventas y facturación.
- `/api/dashboard/*`: Datos estadísticos.

## 7. Decisiones Clave (Architecture Decision Records)
- Uso de **Monorepo lógico** para facilitar el desarrollo en paralelo.
- Estilo visual **Dark/Light** adaptable, priorizando modo claro con sidebar oscura para contraste profesional.
- Uso de **Prisma** para agilizar el modelado de datos y migraciones.

---
*Este documento se actualizará automáticamente con cada nueva característica implementada.*
