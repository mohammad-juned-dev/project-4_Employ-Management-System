const employees =[
  {
    "id": "EMP001",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "123",
    "taskcount": {
      "active_task_count": 2,
      "completed_task_count": 1,
      "failed_task_count": 1,
      "new_task": 1
    },
    "tasks": [
      {
        "task_title": "Update Database Schema",
        "task_description": "Migrate old user tables to the new schema and verify data integrity.",
        "task_date": "2026-10-10",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Fix Login Bug",
        "task_description": "Resolve the session timeout issue on the mobile authentication portal.",
        "task_date": "2026-10-06",
        "category": "Bug Fix",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "API Documentation",
        "task_description": "Write comprehensive Swagger documentation for the v2 payment endpoints.",
        "task_date": "2026-10-15",
        "category": "Documentation",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Security Audit",
        "task_description": "Run vulnerability scans across all microservices.",
        "task_date": "2026-10-02",
        "category": "Security",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": "EMP002",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "123",
    "taskcount": {
      "active_task_count": 2,
      "completed_task_count": 1,
      "failed_task_count": 0,
      "new_task": 1
    },
    "tasks": [
      {
        "task_title": "Quarterly Financial Report",
        "task_description": "Compile Q3 expense sheets and revenue projections for management review.",
        "task_date": "2026-10-12",
        "category": "Finance",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Vendor Negotiations",
        "task_description": "Discuss renewal terms with cloud hosting provider.",
        "task_date": "2026-10-05",
        "category": "Operations",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Budget Allocation",
        "task_description": "Distribute department budgets for the upcoming fiscal year.",
        "task_date": "2026-10-20",
        "category": "Finance",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "EMP003",
    "name": "Robert Johnson",
    "email": "robert.johnson@example.com",
    "password": "123",
    "taskcount": {
      "active_task_count": 3,
      "completed_task_count": 1,
      "failed_task_count": 1,
      "new_task": 2
    },
    "tasks": [
      {
        "task_title": "Design Landing Page",
        "task_description": "Create wireframes and high-fidelity mockups for the new marketing campaign.",
        "task_date": "2026-10-08",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Brand Guidelines Update",
        "task_description": "Revise the company color palette and typography rules.",
        "task_date": "2026-09-28",
        "category": "Design",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Social Media Assets",
        "task_description": "Produce graphic banners for the upcoming product launch event.",
        "task_date": "2026-10-14",
        "category": "Marketing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "User Feedback Analysis",
        "task_description": "Review UI/UX survey data collected from recent beta testers.",
        "task_date": "2026-10-04",
        "category": "Research",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "task_title": "Prototype Testing",
        "task_description": "Conduct usability testing sessions with selected target users.",
        "task_date": "2026-10-18",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "EMP004",
    "name": "Emily Davis",
    "email": "emily.davis@example.com",
    "password": "123",
    "taskcount": {
      "active_task_count": 2,
      "completed_task_count": 1,
      "failed_task_count": 0,
      "new_task": 1
    },
    "tasks": [
      {
        "task_title": "Onboard New Hires",
        "task_description": "Conduct orientation and set up workstation accounts for incoming engineering recruits.",
        "task_date": "2026-10-07",
        "category": "HR",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Performance Reviews",
        "task_description": "Schedule and complete mid-year employee evaluation meetings.",
        "task_date": "2026-10-25",
        "category": "HR",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Team Building Event",
        "task_description": "Plan logistics and book venue for the autumn company retreat.",
        "task_date": "2026-10-19",
        "category": "Culture",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "EMP005",
    "name": "Michael Brown",
    "email": "michael.brown@example.com",
    "password": "123",
    "taskcount": {
      "active_task_count": 3,
      "completed_task_count": 1,
      "failed_task_count": 0,
      "new_task": 2
    },
    "tasks": [
      {
        "task_title": "Customer Support Ticket Backlog",
        "task_description": "Clear out high-priority customer trouble tickets reported over the weekend.",
        "task_date": "2026-10-06",
        "category": "Support",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Knowledge Base Articles",
        "task_description": "Write troubleshooting guides for frequent user inquiries.",
        "task_date": "2026-10-09",
        "category": "Support",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Phone System Maintenance",
        "task_description": "Coordinate with telecom provider to upgrade the call center routing tree.",
        "task_date": "2026-09-30",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Customer Satisfaction Survey",
        "task_description": "Analyze post-interaction CSAT ratings and summarize feedback trends.",
        "task_date": "2026-10-16",
        "category": "Support",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]

  const admins = [{
    "id": "ADM001",
    "email": "admin@example.com",
    "password": "123"
  }]


  export const setLocalStorage = ()=>{
localStorage.setItem("employees" , JSON.stringify(employees))
localStorage.setItem("admins" , JSON.stringify(admins))
  }
  export const getLocalStorage = ()=>{
 const employee = JSON.parse(localStorage.getItem("employees" ))
 const admin = JSON.parse(localStorage.getItem("admins"))
 return {employee ,  admin}
  }