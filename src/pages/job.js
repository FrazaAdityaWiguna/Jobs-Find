import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import arrowLeft from "../icon/arrow-left.svg";

const Job = () => {
  let { project_id } = useParams();
  const navigate = useNavigate();
  const [job, setjob] = useState(null);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions/${project_id}`
      )
      .then(function (response) {
        // handle success
        setjob(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="p-3">
        <div
          className="text-blue-500 my-5 font-bold flex items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <span className="mr-2">
            <img src={arrowLeft} alt="Back" />
          </span>{" "}
          Back
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          {job && (
            <>
              <div>
                <span className="text-gray-500">
                  {job.type} / {job.location}
                </span>
                <h3 className="font-bold text-2xl">{job.title}</h3>
              </div>

              <hr className="w-full h-[1px] border-t border-v3-primary-400 my-6" />

              <div className="flex flex-col md:flex-row break-words">
                <div className="mr-4">
                  <div
                    className="list-disc"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                </div>

                <div>
                  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-3 md:mt-0">
                    <span className="font-bold">{job.company}</span>
                    <hr className="w-full h-[1px] border-t border-v3-primary-400 my-6" />
                    <img src={job.company_logo} alt={job.company} />
                    <span>
                      <a
                        className="text-blue-500 underline-offset-2"
                        href={job.company_url}
                      >
                        {job.company_url}
                      </a>
                    </span>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-5 bg-yellow-100 break-words">
                    <span className="font-bold">How To Apply</span>
                    <hr className="w-full h-[1px] border-t border-v3-primary-400 my-6" />
                    <div>
                      <div>
                        Email your resume to apply or directly at{" "}
                        <a
                          href={job.url}
                          className="text-blue-500 underline-offset-2"
                        >
                          {job.url}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Job;
