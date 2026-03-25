# QWEN Code - AI Agent Guidelines for Rowad

## 🎯 Role & Responsibilities

When working on tasks, the AI agent (QWEN Code) must act as:

1. **Senior Software Engineer** - Write production-ready, maintainable code
2. **Senior Frontend Engineer** - Expert in React, NextJs, TypeScript, and modern UI/UX patterns
3. **Senior Software Architect** - Design scalable, maintainable system architectures
4. **Senior Software Tester** - Ensure comprehensive test coverage and quality
5. **Reviewer Bot** - Catch errors in tests, types, and common junior developer mistakes

---

## 📜 Core Development Principles

### 1. SOLID Principles
- **Single Responsibility** - Each class/function should have one reason to change
- **Open/Closed** - Open for extension, closed for modification
- **Liskov Substitution** - Subtypes must be substitutable for their base types
- **Interface Segregation** - Prefer many specific interfaces over general-purpose ones
- **Dependency Inversion** - Depend on abstractions, not concretions

### 2. Clean Code Principles
- Write self-documenting code with meaningful names
- Keep functions small and focused (< 20 lines preferred)
- Avoid code duplication (DRY - Don't Repeat Yourself)
- Use descriptive variable names that reveal intent
- Minimize comments by writing clear code

### 3. Type Safety
- **NEVER** use `any` or `unknown` types
- **NEVER** use `null` - use `undefined` or optional types instead
- Always define explicit return types for functions
- Use TypeScript strict mode features (strictNullChecks, noImplicitAny, etc.)
- Prefer interfaces/types over inline type definitions

---

## 🏗️ Technology Stack




### Frontend 
- **Framework:** Next.js 16.x with TypeScript
- **State Management:** Next.js Router
- **Routing:** Next.js Router
- **Styling:** Tailwind CSS + Shadcn UI + Daisy UI
- **Forms:** react-hook-form with Zod validation
- **UI Components:** Custom components
- **Data Fetching:** Axios with interceptors

### Monorepo Management
- **Tool:** Nx
- **Package Manager:** pnpm

---



### Path Aliases (TypeScript Imports)
**⚠️ CRITICAL: Use path aliases for imports, never relative paths!**

The project uses TypeScript path mappings configured in `tsconfig.base.json`. Always use these aliases:

**Available Path Aliases:**
```typescript
// Backend & App Aliases
import { PrismaRepository } from '@backend/modules/repository/prisma.repository';
import { SomeService } from '@teacher/services/some.service';
import { SomeComponent } from '@student/components/SomeComponent';

// Shared Libraries
import { SomeDto } from '@gamifix/dtos';
import { GfxDatatableComponent } from '@gamifix/gfx-datatable';
import { GfxFormComponent } from '@gamifix/gfx-form';
import { TemplateUtil } from '@gamifix/gfx-templates';
import { ApiService } from '@gamifix/shared/gfx-services';

// Common Shared Libraries
import { RouteConstants } from '@gfx-constants';
import { EditorComponent } from '@gfx-editor';
import { LayoutComponent } from '@gfx-layout';
import { LoggerService } from '@gfx/logger';
import { DateUtils } from '@gfx-utils';

// Prisma Fixtures (for testing)
import { schoolFixtures } from '@prisma/fixtures/school.fixture';
import { userFixtures } from '@prisma/fixtures/user.fixture';
```

**Benefits:**
1. **Maintainability** - No need to update imports when moving files
2. **Readability** - Clear where imports come from
3. **Consistency** - All imports follow the same pattern
4. **Monorepo-friendly** - Works across Nx workspace boundaries

**NEVER DO THIS:**
```typescript
// ❌ WRONG: Relative paths
import { SomeService } from '../../../../services/some.service';
import { SomeDto } from '../../../libs/shared/gfx-dtos/src/lib/some.dto';
```

**CORRECT:**
```typescript
// ✅ CORRECT: Path aliases
import { SomeService } from '@backend/services/some.service';
import { SomeDto } from '@gamifix/dtos';
```

---


### Route Constants (NO Hardcoded Strings)
**⚠️ CRITICAL: NEVER hardcode route paths in controllers!**

**WRONG (Hardcoded Strings):**
```typescript
// ❌ WRONG: Hardcoded route path
@Controller('assessments')
export class AssessmentsController {
  
  @Get('submissions')  // ❌ WRONG: Hardcoded!
  async getSubmissions() {
    // ...
  }
  
  @Get(':id/details')  // ❌ WRONG: Hardcoded!
  async getDetails() {
    // ...
  }
}
```

**CORRECT (Use Route Constants):**
```typescript
import { RouteConstants } from '@gfx-constants';

// ✅ CORRECT: Use constants from shared library
@Controller(RouteConstants.ASSESSMENTS)
export class AssessmentsController {
  
  @Get(RouteConstants.SUBMISSIONS)  // ✅ Uses constant!
  async getSubmissions() {
    // ...
  }
  
  @Get(`${RouteConstants.ID_PARAM}/${RouteConstants.DETAILS}`)  // ✅ Uses constants!
  async getDetails() {
    // ...
  }
}
```

**Available Route Constants:**
```typescript
// libs/shared/gfx-constants/src/lib/constants/route.constants.ts

// Common
static ID_PARAM = ':id';
static DETAILS = 'details';

// Assessments
static ASSESSMENTS = 'assessments';
static ASSESSMENT_ID_PARAM = ':assessmentId';
static SUBMISSIONS = 'submissions';
static SUBMISSIONS_REPORT = 'submissions-report';
static START = 'start';

// Courses
static COURSES = 'courses';
static COURSE_ID_PARAM = ':courseId';
static COURSE_GRADES = 'course-grades';
static AVAILABLE_WEIGHT = 'available-weight';

// Classes
static CLASSES = 'classes';
static DROPDOWN = 'dropdown';

// Students
static STUDENTS = 'students';
static STUDENT_ID_PARAM = ':studentId';

// Teachers
static TEACHERS = 'teachers';
static TEACHER_ID_PARAM = ':teacherId';

// ... and more
```

**Benefits:**
1. **Consistency** - All routes use the same naming convention
2. **Maintainability** - Change once in constants, updates everywhere
3. **Type Safety** - Constants are exported from shared library
4. **Discoverability** - Easy to see all routes in one file
5. **No Typos** - Prevents `'assesments'` vs `'assessments'` bugs

**Import Path:**
```typescript
import { RouteConstants } from '@gfx-constants';
// or
import { RouteConstants } from '@gamifix/constants';
```

---

## 📝 Commit Guidelines

### Commit Message Format
```
<type>(<scope>): <short description>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `test:` Test updates
- `docs:` Documentation updates
- `chore:` Build/config updates

**Examples:**
```
feat(assessments): add template creation endpoint
fix(classes): resolve student assignment bug
refactor(auth): simplify JWT validation logic
test(users): add API tests for registration
```

### Commit Message Format
**ONE LINE ONLY** - No body, no bullet points, no "Author:" line

**Examples:**
```
✅ GOOD:
feat(templates): add assessment template database schema
fix(auth): resolve JWT validation error

❌ BAD:
feat(templates): add assessment template database schema

- Create AssessmentTemplate model
- Add sections and questions models

Author: Samy Mostafa Shaawat
```

### Author Information
- **ONLY** use user name: **SamyShaawat**
- **EMAIL:** [samy.shaawat@gmail.com]
- **NEVER** mention QwenCode or qwencoder as co-author
- **NEVER** Co-authored-by: Qwen-Coder <qwen-coder@alibabacloud.com>
- **NEVER** add "Author:" line in commit message
- **NEVER** add "Co-authored-by:" lines
- **CRITICAL:** Git will NOT add any co-author lines automatically
- Commit message: **ONE LINE ONLY** (no body, no bullets)

### ⚠️ IMPORTANT: Co-Author Lines Are NEVER Allowed
**Under NO circumstances should any commit include:**
```
Co-authored-by: Qwen-Coder <qwen-coder@alibabacloud.com>
Co-authored-by: QwenCode <...>
Co-authored-by: ...
```

**If a co-author line appears:**
1. Immediately amend the commit to remove it
2. Use: `git commit --amend -m "your message"`
3. Or use: `git filter-branch --msg-filter 'grep -v "Co-authored-by"'`
4. Force push: `git push --force-with-lease`

**This rule is ABSOLUTE and NON-NEGOTIABLE.**

---

## 📚 Additional Resources
- **React Docs:** https://react.dev
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **Testing Library:** https://testing-library.com
- **Nx Docs:** https://nx.dev
- **Curriculum Vitae:** https://curriculum-vitae.vercel.app/
---

## ⚠️ Important Reminders

1. **Always check existing code** before creating new files
2. **No `any`, `unknown`, or `null`** types
3. **Follow AAA pattern** in all tests
4. **Keep commits atomic** with clear messages
5. **Author: SamyShaawat** only

