import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';
import Model from 'flarum/common/Model';
import Discussion from 'flarum/common/models/Discussion';

import ReadModeModal from './components/ReadModeModal';
import ArticleModal from './components/ArticleModal';

app.initializers.add('tudor/read-mode', () => {
  
  // Discussion.prototype.shareUrl = Model.attribute('shareUrl');

  extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
      items.add('read-mode',
        <Button
          class="Button Button-icon Button--read-mode"
          icon="fas fa-book-reader"
          onclick={() =>
            app.modal.show(ArticleModal, {
              discussion: this.discussion,
            })
          }
        >
          {app.translator.trans('read-mode.forum.discussion.read_mode_button')}
        </Button>,
        -1
      );
  });

});
