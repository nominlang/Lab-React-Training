function studentCard(props) {
    const { student } = props;
  
    return (
      <div key={student._id} className="studentCard">
        <h2>First Name: {student.firstName}</h2>
      </div>
    );
  }
  
  export default studentCard;
  