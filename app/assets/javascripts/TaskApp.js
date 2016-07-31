import React from "react"

export default class TaskApp extends React.Component {
    construstor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    
    loadTaskFromServer(){
        request
            .get(this.props.url)
            .accept('application/json')
            .end((err, res) => {
                if(err || !res.ok) {
                    console.error(this.props.url, status, err.toString());
                } else {
                    this.setState({data: res.body});
                }
            });
    }
    
    hundleTaskSubmit(task){
        var tasks = this.state.data;
        var newTasks = tasks.concat([task]);
        this.setState({data: newTasks});
        request
            .post(this.props.url)
            .accept('application/json')
            .send({task: task})
            .end((err, res) => {
                if(err || !res.ok){
                    console.error(this.props.url, status, err.toString());
                }else{
                    this.setState({data: newTasks});
                }
            });
    }
    
    component
    
    render() {
        return (
            <div className="TaskApp">
                Hello, Web Development World!
            </div>
        );
    }
}