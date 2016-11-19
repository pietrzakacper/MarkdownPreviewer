import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import RawInput from './input.jsx';

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: `### This is GitHub Markdown  !

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)

Sometimes you want lists:

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

And if you'd like to use code:

\`\`\`
if (isAwesome){
  return true
}
\`\`\`
But I have to admit, tasks lists are my favorite:

- [x] This is a complete item
- [ ] This is an incomplete item`
        };
        this.update = this.update.bind(this);
    }

    afterTranspiling(text) {
        const transpiled = marked(text, {sanitize: true})
        return {__html: transpiled};
    }

    update(text) {
        this.setState({value: text});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <RawInput default={this.state.value} update={this.update}/>
                </div>
                <div className="col-md-6">
                    <span dangerouslySetInnerHTML={this.afterTranspiling(this.state.value)}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Previewer/>, document.getElementsByClassName('container')[0]);
