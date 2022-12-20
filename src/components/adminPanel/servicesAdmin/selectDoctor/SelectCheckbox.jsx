import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

const SelectCheckbox = ({
  item,
  setClickableServiceData,
  clickableServiceData,
}) => {
  return (
    <li
      style={{ padding: " 4px 8px", border: "0.5px solid #d6d6d6" }}
      onClick={() => {
        if (clickableServiceData.doctorsIdList.includes(item.ID)) {
          setClickableServiceData((prev) => {
            prev.doctorsIdList = prev.doctorsIdList.filter(
              (id) => id !== item.ID
            );

            return { ...prev };
          });
        } else {
          setClickableServiceData((prev) => {
            let prevList = prev.doctorsIdList;
            return {
              ...prev,
              doctorsIdList: [...prevList, item.ID],
            };
          });
        }
      }}
    >
      <label
        htmlFor={item.ID}
        style={
          clickableServiceData.doctorsIdList.includes(item.ID)
            ? { color: "red", cursor: "pointer", fontWeight: "700" }
            : { cursor: "pointer" }
        }
      >
        {item.FirstName + " " + item.LastName}
      </label>
      <span style={{ marginLeft: "6px", cursor: "pointer" }}>
        {clickableServiceData.doctorsIdList.includes(item.ID) ? (
          <RiCheckboxBlankCircleFill />
        ) : (
          <RiCheckboxBlankCircleLine />
        )}
      </span>
    </li>
  );
};

export default SelectCheckbox;
