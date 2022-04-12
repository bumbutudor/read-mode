import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';
import Model from 'flarum/common/Model';
import Discussion from 'flarum/common/models/Discussion';

import ReadModeModal from './components/ReadModeModal';
import ArticleModal from './components/ArticleModal';
import { getBrowser } from './utils/getBrowser';
import { isProbablyReaderable, Readability } from '@mozilla/readability'

app.initializers.add('tudor/read-mode', () => {

  // Discussion.prototype.shareUrl = Model.attribute('shareUrl');
  extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
    const browser = getBrowser();

    console.log(browser);
    // fnBrowserDetect();

    items.add('read-mode',
      <Button
        class="Button Button-icon Button--read-mode"
        icon="fas fa-book-reader"
        onclick={() => {
          if (browser === 'chrome') {
            app.modal.show(ArticleModal, { discussion: this.discussion });
          }
          if (browser === 'firefox') {
            if (isProbablyReaderable(document)) {
              // var documentClone = document.cloneNode(true);
              // var article = new Readability(documentClone).parse();
              document.dispatchEvent(
                new KeyboardEvent("keydown", {
                  "key": "F9",
                  "keyCode": 120,
                  "which": 120,
                  "code": "F9",
                  "location": 0,
                  "altKey": false,
                  "ctrlKey": false,
                  "metaKey": false,
                  "shiftKey": false,
                })
              );
            }
          }
        }

        }
      >
        {app.translator.trans('read-mode.forum.discussion.read_mode_button')}
      </Button>,
      -1
    );
  });

});
