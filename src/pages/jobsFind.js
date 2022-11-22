import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Input1 from "../components/input";
import JobTemplate from "../components/jobTemplate";
import briefcase from "../icon/briefcase.svg";
import globe from "../icon/globe.svg";

const JobsFind = () => {
  const [jobs, setJobs] = useState(null);
  const [filter, setFilter] = useState({
    description: "",
    location: "",
    full_time: false,
  });
  const [loading, setLoading] = useState({
    btnLoading: false,
  });
  const [stateBtn, setStateBtn] = useState({ moreBtn: true });

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=1"
      )
      .then(function (response) {
        // handle success
        setJobs(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const fullJobs = async () => {
    // Make a request for a user with a given ID
    await axios
      .get("http://dev3.dansmultipro.co.id/api/recruitment/positions.json")
      .then(function (response) {
        // handle success
        setJobs(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    setStateBtn((prev) => ({ ...prev, moreBtn: false }));
  };

  const handleFilter = async () => {
    setLoading((prev) => ({ ...prev, btnLoading: true }));
    await axios
      .get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${filter.description}&location=${filter.location}&full_time=${filter.full_time}`
      )
      .then(function (response) {
        setJobs(response.data);
        setLoading((prev) => ({ ...prev, btnLoading: false }));
      })
      .catch(function (error) {
        console.log(error);
      });

    setStateBtn((prev) => ({ ...prev, moreBtn: true }));
  };

  return (
    <>
      <Header />

      <div className="p-3">
        <div className="flex w-full justify-between md:items-center flex-col md:flex-row">
          <div className="basis-1/4">
            <strong></strong>
            <Input1
              title="Job Description"
              placeholder="Filter by title, benefits, companiees, expertise"
              img={briefcase}
              funcInput={(e) =>
                setFilter((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </div>

          <div className="basis-1/4">
            <Input1
              title="Location"
              placeholder="Filter by city, state, zip code of country"
              img={globe}
              funcInput={(e) =>
                setFilter((prev) => ({ ...prev, location: e.target.value }))
              }
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
              onChange={(e) =>
                setFilter((prev) => ({ ...prev, full_time: e.target.checked }))
              }
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              Full Time Only
            </label>
          </div>

          <button
            type="button"
            className="text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm   mr-2 mb-2 min-w-[80px] min-h-[40px] flex items-center justify-center"
            onClick={() => handleFilter()}
          >
            {loading.btnLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-gray-200 animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <>search</>
            )}
          </button>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full">
          <h3>
            <strong>Job List</strong>
          </h3>

          {jobs && (
            <>
              {jobs.map((job) => (
                <JobTemplate
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  company={job.company}
                  jobType={job.type}
                  location={job.location}
                  datepost={job.created_at}
                />
              ))}
              {jobs.length >= 10 && stateBtn.moreBtn && (
                <button
                  type="button"
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 mr-2 "
                  onClick={() => fullJobs()}
                >
                  More Jobs
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default JobsFind;
