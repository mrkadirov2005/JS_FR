import React from "react";
import { PhotosContainer, GENERALPAGECONTAINER } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setPhoto } from "../../../settings/reducers/photoSlice/photoSlice";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../../settings/reducers/userSlice/userSlice";
import styled from "styled-components";
import { setPost } from "../../../settings/reducers/postSlice/postSlice";

const OL = styled.ol`
  display: flex;
  flex-wrap: wrap;
`;

export default function POSTS() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const PHOTOS = useSelector((state) => state.posts.postslist);
  const AUTHSTATUS = useSelector((state) => state.user.auth);
 

  const getSinglePhoto = (e) => {
    if (AUTHSTATUS) {
      const ID = e.target.id;
      const selectedPhoto = PHOTOS.filter((item) => item.id == ID);
      dispatch(setPost(selectedPhoto));
      navigate("/post");
    } else {
      const userANSWER = prompt(
        "unauthorized use, \n \t please enter your name and email with slash between"
      );
// ozim ochirib qoydim
      if (userANSWER.includes("/")) {
        dispatch(authUser(userANSWER));
        navigate("/post");
      } else {
        alert("you did not prove correct info");
        getSinglePhoto();
      }
    }
  };

  return (
    <GENERALPAGECONTAINER>
      <OL>
        {PHOTOS.map((item) => (
          <li id={item.id}
              onClick={(e) => getSinglePhoto(e)} key={item.id}>
            {item.title} <br/>
            {item.body} <br/>
            
          </li>
        ))}
      </OL>
    </GENERALPAGECONTAINER>
  );
}
