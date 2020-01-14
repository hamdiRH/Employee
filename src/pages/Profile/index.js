import Profil from "./profile"
import { connect } from 'react-redux'
import {selectOneEmployes} from "../../redux/selector";
import {fetchEmployments} from '../../redux/action'



const mapStateToProps = (state, ownProps) => {
    return {
      employe: selectOneEmployes(state,ownProps.match.params.id)
    };
  };



export default connect(mapStateToProps,{fetchEmployments})(Profil) 