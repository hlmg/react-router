import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  // Query String
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log(id);

  return (
    <div>
      <h1>Edit</h1>
      <p>일기 수정 페이지</p>
      <button onClick={() => setSearchParams({ user: "abc" })}>
        QueryString
      </button>
      <button onClick={() => navigate("/home")}>HOME으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
