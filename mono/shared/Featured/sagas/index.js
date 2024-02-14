import { all } from "redux-saga/effects";
import watchFetchPopUp from "./popUp.saga";

export default function* rootSaga() {
    yield all([
        watchFetchPopUp()
    ]);
    }
