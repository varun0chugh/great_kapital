import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://jsonfakery.com/jobs/${id}`).then((response) => {
      setJob(response.data);
    });
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <ul>
        {job.qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
      <p>{job.number_of_openings} openings</p>
      <p>{job.salary_range}</p>
      <p>Deadline: {job.application_deadline}</p>
      <p>Contact: {job.contact_information}</p>
    </div>
  );
}

export default JobDetails;