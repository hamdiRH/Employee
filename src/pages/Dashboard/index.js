import Dashboard from "./dashboard";
import { connect } from "react-redux";
import * as actions from "../../redux/action";

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(
    mapStateToProps,
    {...actions},
  )(Dashboard) 
