import { Pagination, Select, Space } from "antd";
import section2 from "../../../Assets/image/section2.webp";
import ApiJobs from "../../../Parts/API";
import { useState } from "react";

function SectionTwo() {
  const [page, setPage] = useState(1);
  const[select,setSelect] = useState('HighToLow');
  const onChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const handleChange=(e)=>{
    setSelect(e);
  }
  const infor =[
    {
      page:page,
      select:select,
    }
  ]

  return (
    <>
      <div className="layoutsearch__sectiontwo">
        <div className="layoutsearch__sectiontwo__header">
          <h2>Việc làm tốt nhất</h2>
          <div className="layoutsearch__sectiontwo__headerbox">
            <img src={section2} />
            <div className="layoutsearch__sectiontwo__headerbox"></div>
          </div>
        </div>

        <div className="layoutsearch__sectiontwo__main">
          <div>
            <Space
              style={{
                width: "20%",
                display: "block",
                marginBottom: "20px",
                padding: " 4px 0px",
              }}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Lọc theo:"
                options={[
                  {
                    value: "HighToLow",
                    label: "Giảm dần",
                  },
                  {
                    value: "LowToHigh",
                    label: "Tăng dần",
                  },
                ]}
                onChange={handleChange}
              />
            </Space>
            <ApiJobs page={infor} />
          </div>
          <Pagination
            simple
            defaultCurrent={1}
            defaultPageSize={4}
            total={20}
            onChange={onChange}
            className="pagination"
          />
        </div>
      </div>
    </>
  );
}
export default SectionTwo;
