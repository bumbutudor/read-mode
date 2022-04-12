import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';
import Model from 'flarum/common/Model';
import Discussion from 'flarum/common/models/Discussion';

// import ReadModeModal from './components/ReadModeModal';
import ArticleModal from './components/ArticleModal';
import { getBrowser } from './utils/getBrowser';
import { isProbablyReaderable, Readability } from '@mozilla/readability'

app.initializers.add('tudor/read-mode', () => {

  // Discussion.prototype.shareUrl = Model.attribute('shareUrl');
  extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
    const browser = getBrowser();

    console.log(browser);
    // fnBrowserDetect();

    const handleBrowser = () => {
      if (browser === 'firefox') {
        if (isProbablyReaderable(document)) {
          const documentClone = document.cloneNode(true);
          const article = new Readability(documentClone).parse();
          // TODO
          app.modal.show(ArticleModal, { discussion: this.discussion });
        }
      }
      if (browser === 'edge') {
        const baseUrl = app.forum.attribute('baseUrl');
        const read_url = `read://https_${baseUrl}?url=${this.discussion.shareUrl()}`;
        window.open(read_url, "_blank");
        // console.log(read_url);
      }
      else {
        app.modal.show(ArticleModal, { discussion: this.discussion });
      }


    }

    items.add('read-mode',
      <Button
        class="Button Button-icon Button--read-mode"
        icon="fas fa-book-reader"
        onclick={() => handleBrowser()}
      >
        {app.translator.trans('read-mode.forum.discussion.read_mode_button')}
      </Button>,
      -1
    );
  });

});
