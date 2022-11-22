import React from "react";
import { Link } from "react-router-dom";

const JobTemplate = ({ title, company, jobType, location, datepost, id }) => {
  return (
    <>
      <div className="my-3">
        <hr className="w-full h-[1px] border-t border-v3-primary-400 my-6" />
        <Link to={`/job/${id}`}>
          <div className="flex justify-between md:items-center flex-col md:flex-row">
            <div>
              <div className="text-blue-600">
                <strong>{title}</strong>
              </div>
              <p className="text-gray-500">
                {company} - <span className="text-green-600">{jobType}</span>
              </p>
            </div>
            <div>
              <div className="text-black-700">{location}</div>
              <div className="text-gray-500">{datepost} ago</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default JobTemplate;
