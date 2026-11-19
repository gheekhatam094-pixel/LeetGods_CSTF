# Student Profile Directory (Next.js + Tailwind, JavaScript)

## Run
    npm install
    npm run dev
Open http://localhost:3000

## Structure
- app/page.js                  -> home page, lists all students
- app/students/[id]/page.js    -> dynamic route, full details of one student
- components/StudentCard.js    -> reusable component (uses props)
- data/students.json           -> static data
- public/images/               -> profile images
