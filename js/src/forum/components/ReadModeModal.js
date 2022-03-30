import app from 'flarum/forum/app';
import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import { truncate, getPlainContent } from 'flarum/common/utils/string';
import PostStream from 'flarum/forum/components/PostStream';


export default class ReadModeModal extends Modal {
    oninit(vdom) {
        super.oninit(vdom);
        this.discussion = this.attrs.discussion;
        // this.readMode = this.discussion.readMode();
    }
  
    className() {
        return 'ReadModeModal Modal--large';
    }   

    title() {
        return app.translator.trans('read-mode.forum.modal.title');
    }

    content() {
        // const url = encodeURIComponent(this.discussion.shareUrl());
        const title = encodeURIComponent(app.title);
        
        const firstPost = this.discussion.firstPost()
          ? this.discussion.firstPost()
          : '';

        // const firstPostContent = m.trust(firstPost.contentHtml());
        const firstPostContent = getPlainContent(firstPost.contentHtml());
        // console.log(firstPostContent);

       
        if (firstPost) {
            const content = <div inert>{firstPostContent}</div>;
        }

        return (
          <div className="Modal-body">
            <div className="Form Form--centered">
              <div className="Form-group">
                <div className="ReadModeModal-content">
                    {/* {title}
                    {content} */}
                    <div className="DiscussionPage-stream">
                        {PostStream.component({
                        discussion: this.discussion,
                        stream: this.stream,
                        onPositionChange: this.positionChanged.bind(this),
                        })}
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

}