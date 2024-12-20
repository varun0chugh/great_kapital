import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function JobList() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://jsonfakery.com/jobs').then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded">
            <h2 className="text-lg font-bold">{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary_range}</p>
            <p>{job.employment_type}</p>
            <Link to={`/jobs/${job.id}`} className="text-blue-600">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;