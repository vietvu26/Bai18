import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addName,
  removeName,
  addToFavorite,
  setFavoriteName,
} from "./store/listapp.js";

export default function Danhba() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleRemoveName = (id) => {
    dispatch(removeName(id));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setName(value);
    if (name === "phoneNumber") setPhone(value);
  };
  const handleAddUser = () => {
    if (name !== "" && phone !== "") {
      dispatch(addName({ name, phone }));

      setName("");
      setPhone("");
    }
  };
  const handleRemoveFavoriteUser = (id) => {
    dispatch(removeName(id));
  };

  const handleFavorite = (id) => {
    dispatch(addToFavorite(id));
  };

  const handleSetFavoriteUser = (filter) => {
    dispatch(setFavoriteName(filter));
  };

  const names = useSelector((state) => {
    if (state.lists.filter === "all") return state.lists.items;
    if (state.lists.filter === "favorite")
      return state.lists.items.filter((name) => name.favorite);
  });

  return (
    <div>
      <div className="container col-4">
        <h2 className="text-center">Danh bạ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Tên người dùng
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Số điện thoại
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phone}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddUser}
          >
            Thêm
          </button>
        </form>
        <ul className="mt-3 list-unstyled d-flex justify-content-between">
          <li className="">
            <button
              className="btn btn-success"
              onClick={() => handleSetFavoriteUser("all")}
            >
              Tất cả danh bạ
            </button>
          </li>
          <li className="">
            <button
              className="btn btn-success"
              onClick={() => handleSetFavoriteUser("favorite")}
            >
              Danh bạ ưa thích
            </button>
          </li>
        </ul>
      </div>

      <table
        className="text-center mt-3"
        style={{ width: "700px", margin: "auto" }}
      >
        <tr>
          <th>Tên người dùng</th>
          <th>Số điện thoại</th>
          <th>Thêm vào danh bạ ưa thích</th>
          <th>Xoá dữ liệu</th>
        </tr>
        {names.map((name) => (
          <tr key={name.id}>
            <td>{name.name}</td>
            <td>{name.phone}</td>
            <td>
              {name.favorite ? (
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemoveFavoriteUser(name.id)}
                >
                  Xoá khỏi ưa thích
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => handleFavorite(name.id)}
                >
                  Thêm vào ưa thích
                </button>
              )}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveName(name.id)}
              >
                Xoá
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}