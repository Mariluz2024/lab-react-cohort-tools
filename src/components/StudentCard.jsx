import { Link } from "react-router-dom";

function StudentCard({ _id, image, firstName, lastName, program, email, phone }) {
  return (
    <div className="flex justify-between items-center p-2 border-b w-full">
      <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </span>
      <span style={{ flexBasis: "20%" }}>
        <Link
          to={`/students/${_id}`}
          className="text-blue-500 hover:underline"
        >
          {firstName} {lastName}
        </Link>
      </span>
      <span style={{ flexBasis: "20%" }}>{program}</span>
      <span style={{ flexBasis: "20%" }}>{email}</span>
      <span style={{ flexBasis: "20%" }}>{phone}</span>
    </div>
  );
}

export default StudentCard;
