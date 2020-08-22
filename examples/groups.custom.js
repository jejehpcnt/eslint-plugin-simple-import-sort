import fs from "fs";
import assert from "assert";
import react from "react";
import Select from "react-select"
import _ from "lodash"
import {providers} from "./providers"
import tomorrow from "./time/tomorrow"
import now from "./time/now"
import {PRODUCT_NAMES} from "."
import {CATEGORIES} from "../"
import {truncate, removeWhitespace} from "../../utils";
import cssGlobals from "../../css/globals"
import styles from "./styles.scss";
import circleStyles from "./circle.scss";
import "./global.scss"
import {name} from "@company/config"
import Button from "@ui/Button";
import Label from "components/Label"
import {pluralize} from "utils/string"
import {API_URL} from "config";
import VendoredLib from "vendored-lib"
import createWrapper from "vendored-lib/lib/create-wrapper"
import Textarea from "@/ui/Textarea"
import "./local-polyfill"
import "polyfill-package"
import "../../alert.css"

export {readFile} from "fs";
export {providers} from "./providers"
export {PRODUCT_NAMES} from "."
export {truncate, removeWhitespace} from "../../utils";
export default 5;
export const answer = 42;
