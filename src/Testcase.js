import React, { Component } from 'react';

class Tcase extends Component {
  render() {
    return (
      <div>
      <h4>TEST CASE FORM</h4>
      <form>
        Test Case ID: <input type="text" name="tc_id" /><br/>
        Test Case Name: <input type="text" name="tc_name" /><br/>
        Test Case Description: <input type="text" name="tc_descr" /><br/>
        Test Case Goal: <input type="text" name="tc_goal" /><br/>
        Test Case Problem: <input type="text" name="tc_prob" /><br/>
        Test Case Tool: <input type="text" name="tc_tool" /><br/>
        TC Designer Github ID: <input type="text" name="designer" /><br/>
        <input type="submit" name="submit_tcase" />
      </form>
      </div>
    );
  }
}

export default Tcase;
