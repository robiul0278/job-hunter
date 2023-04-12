"# b7a9-career-hub-robiul0278" 

**Those things that i do in my FeatureJobs Components**
    • This is a functional React router component named "JobHunter".
    • It takes in an array of job category and featured Jobs  as a prop.
    • It uses the useState hook to manage the state of whether or not to show all jobs.
    • To get the featured jobs data the session is fetched from the loader and the data is fetched from the json using useLoaderData()
    • It renders a grid of cards for each featured Job in the featured array.
    • It only displays up to 4 jobs by default, or up to 8 jobs if the "See All Jobs" button is clicked.
    • Each card displays the job title, company name, company, location, salary, and jobType (remote, onsite or fulltime).
    • Each card also has a "View Details" button that links to a job details page.




Live site link : https://job-hunter-bd.netlify.app/