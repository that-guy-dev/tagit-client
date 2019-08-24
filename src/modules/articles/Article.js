import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { push } from 'react-router-redux';

import * as actions from './actions';
import { Reminder, ReminderChecked, Archive, ArchiveChecked, Fav, FavChecked, InProgress, InProgressChecked } from '../../assets/icon';
import Focus from '../../assets/focus.svg';
import Edit from '../../assets/edit.svg';
import Highlight from '../../assets/highlight.svg';
import CommentMsg from '../../assets/comment.svg';
import Members from '../../assets/members.svg';
import Share from '../../assets/share.svg';
import StarEmpty from '../../assets/star_empty.svg';
import ProgessEmpty from '../../assets/progress_empty.svg';
import Back from '../../assets/back.svg';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(8, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  width: 100%;
  position: relative;
  padding-top: 40px;
  animation: ${fadeIn} .5s ease-in-out;
  transition: all 0.3s;
  ${props => props.sidebarStatus === true && css`
    grid-template-columns: 250px repeat(8, 1fr);
  `}
`;

const H1 = styled.h1`
  font-size: 2.2em;
  font-weight: 600;
  padding: 10px 0;
  line-height: 42px;
  grid-column: 4 / 8;
    grid-row: 3 / 3;
  letter-spacing: 1px;
  margin-bottom: 1px;
  @media (max-width: 1280px) {
    grid-column: 3 / 9;
  }

`;

const BackButton = styled.img`
  grid-area: 1 / 3 / 1 / 3;
  justify-self: center;
  position: sticky;
  top: 84px;
  padding-top: 18px;
  cursor: pointer;
  height: 25px;
  @media (max-width: 1280px) {
    grid-area: 1 / 2 / 1 / 3;
  }
`;

const FeatImg = styled.div`
    grid-area: 1 / 4 / 3 / 8;
    margin-bottom: 30px;
    width: 100%;
    background-image: url(${props => props.src || ""}); 
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    height: 600px;
    @media (max-width: 1280px) {
      grid-area: 1 / 3 / 3 / 9;
    }
`;

const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: 14px;
  letter-spacing: 1px;
  ${props => props.top && css`
    line-height: 24px;
    color: #777777;
    margin-bottom: 10px;
    font-weight: 100;
  `}
  ${props => props.bottom && css`
    grid-column: 4 / 8;
    grid-row: 4 / 5;
    align-self: center;
    cursor: pointer;
    line-height: 24px;
    color: #5649CF;
    margin: 15px 0 25px;
  `}
  @media (max-width: 1280px) {
    grid-column: 3 / 9;
  }
`;

const StatTime = styled.div`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
`;

const ArticleText = styled.p`
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: .5px;
  line-height: 35px;
  margin-bottom: 25px;
  grid-column: 4 / 8;
  grid-row: 6;
  font-size: 21px;
  @media (max-width: 1280px) {
    grid-column: 3 / 9;
  }
  a  {
    color: black;
    text-decoration: none;
    border-bottom: 3px solid black;
    padding-bottom: 1px;
  }

  img  {
    max-width: 100%;
    margin: 30px auto 20px;
    display: block;
  }

  ol  {
    margin: 30px 0;
  }

  h2, h3 {
    font-size: 1.1em;
    font-weight: 700;
    margin: 35px 0 10px;
  }

  h4, h5{
    font-weight: 600;
    margin: 35px 0 10px;
  }

  span {
  }
  p {
    margin-bottom: 25px;
  }
  iframe {
      width: 100%;
      height: 384px;
    }

    blockquote {
    font-weight: 400;
    background: #FAFAFA;
    padding: 20px;
    margin-bottom: 25px;
    letter-spacing: 2px;
  }
  p > img, p + p > span {
    display: none;
  }
`;

const EditBox = styled.div`
  margin-top: 12px;
  grid-area: 5 / 8 / 8 / 8;
  position: sticky;
  top: 100px;
  transition: width 0.3s;
  justify-self: center;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${props => props.sidebarStatus === true && css`
  `}
  @media (max-width: 1280px) {
    grid-area: 6 / 9 / 8 / 9;
  }
`;

const EditItem = styled.div`
  letter-spacing: 1px;
  font-size: 14px;
  color: #5649CF;
  &:hover {
    cursor: pointer;
  }
  background-image: url(${props => props.src || ""}); 

  /* &:hover {
    &::after {
      position: relative;
      bottom: 4px;
      left: 6px;
      font-size: 0.9em;
      letter-spacing: 2px;
    }
  }
  &::before {
    position: relative;
    top: 2px;
  } */
  ${props => props.bg && css`
    &::before {
      background: #000;
    }
  `}

  ${props => props.star && css`

  &::before {
      content: url(${StarEmpty});
    }
    /* &:hover {
      &::after {
        content: "Favourite";
      }
    } */
  `}
  ${props => props.progress && css`
    &::before {
        content: url(${ProgessEmpty});
      }
      /* &:hover {
        &::after {
          content: "In progress";
        }
      } */
  `}
  ${props => props.highlight && css`
    &::before {
      content: url(${Highlight});
    }
    /* &:hover {
      &::after {
        content: "Highlight";
      }
    } */
  `}
  ${props => props.comment && css`
    &::before {
      content: url(${CommentMsg});
    }
    /* &:hover {
      &::after {
        content: "Comment";
      }
    } */
  `}
  ${props => props.members && css`
    &::before {
      content: url(${Members});
    }
    /* &:hover {
      &::after {
        content: "Members";
      }
    } */
  `}

  ${props => props.disabled === true && css`
    opacity: 0.5;
    cursor: default;
  `}

  ${props => props.focus && css`
    &::before {
      content: url(${Focus});
    }
  `}
  ${props => props.edit && css`
    &::before {
      content: url(${Edit});
    }
  `}
  ${props => props.share && css`
    &::before {
      content: url(${Share});
    }
  `}
`;

const Source = styled.a`
  grid-area: 7 / 5 / 7 / 7;
  justify-self: center;
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 2px;
  line-height: 24px;
  color: rgb(119, 119, 119);
  margin: 20px 0 60px 0;
  font-weight: 100;
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      addToFav: false,
      highlight: false,
      article: { title: null, content: null, tags: [] },
    };
  }

  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(actions.findArticle(match.params.id));
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.article !== prevProps.article) {
      this.setState({ article: this.props.article });
    }
  }

  readingTime = () => {
    const { article } = this.state;
    const minutes = article.length / 2;
    const avgTime = minutes / 50;
    const displayed = Math.ceil(avgTime.toFixed(2));
    return displayed;
  };

  highlight = () => {
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);
    const clonedSelection = range.cloneContents();

    const div = document.createElement('div');
    div.appendChild(clonedSelection);

    let html = div.innerHTML;

    if (html.startsWith('<')) {
      const index = html.indexOf('>');
      html = html.slice(index + 1, html.length);
    }

    if (html.endsWith('>')) {
      const index = html.lastIndexOf('<');
      html = html.slice(0, index);
    }

    const element = document.getElementById('articleContent');
    const currenthtml = element.innerHTML;
    const { article } = this.state;

    let markedHtml = '';

    for (let i = 0; i < html.length; i++) {
      if (html[i] === '<') {
        markedHtml += '</mark><';
      } else if (html[i] === '>') {
        markedHtml += '><mark>';
      } else {
        markedHtml += html[i];
      }
    }

    markedHtml = `<mark>${markedHtml}</mark>`;

    const content = currenthtml.replace(html, markedHtml);
    article.content = content;

    this.setState({ article });
  }

  comment = () => {

  }

  edit = () => {
    const { highlight, comment } = this.state;
    if (highlight) {
      this.highlight();
    } else if (comment) {
      this.comment();
    }
  }

  save = () => {
    const { match, dispatch } = this.props;
    const { article } = this.state;

    dispatch(actions.updateArticle(match.params.id, article));
    this.setState({
      highlight: false,
      comment: false,
      edit: false,
    });
  }

  back = () => {
    /* eslint-disable */
    history.go(-1)
  }

  toggleTag = (tag) => {
    const { match, dispatch } = this.props;
    const { article } = this.state;

    const index = article.tags.indexOf(tag);
    if(index === -1) {
      article.tags.push(tag);
    } else {
      article.tags.splice(index, 1);
    }

    dispatch(actions.updateArticle(match.params.id, article ));

    this.setState({ article })

  }

  render() {
    const { sidebarStatus, dispatch } = this.props;
    const { article, highlight, comment, edit } = this.state;

    const tags = article.tags.map((item) =>
      <StatTime onClick={() => dispatch(push(`/articles/${item}`))} style={{paddingRight: '10px'}}>#{item}</StatTime>
    );


    return (
      // <div style={{ display: 'flex', justifyContent: 'center', width: 'calc(100vw - 80px)', position: 'absolute', right:'0' }}>
      <ArticleWrapper sidebarStatus={sidebarStatus.isOpen}>
        {/* <StatBox top>
          <div style={{ fontSize: '0.9em' }}>Tagged: {moment(article.createdAt).format('DD.MM.YYYY')}</div>
          <div style={{ fontSize: '0.9em' }}>{article.tags ? article.tags.length : ''} tags</div>
          <a href={article.url} target="_blank" style={{ fontSize: '0.9em' }}>Source</a>
        </StatBox> */}
        <H1>{article.title}</H1>
        <StatBox bottom>
          <div style={{display: 'flex'}}>{tags}</div>
          <StatTime> {this.readingTime()} min</StatTime>
        </StatBox>
        <BackButton src={Back} onClick={this.back} />
        <FeatImg src={article.image} />
        <ArticleText
          onMouseUp={this.edit}
          dangerouslySetInnerHTML={{ __html: article.content }}
          id="articleContent"
        />
        <EditBox sidebarStatus={sidebarStatus.isOpen}>
          <EditItem
            disabled={highlight || comment}
            bg={article.tags.indexOf('favorites') > -1}
            onClick={() => this.toggleTag('favorites')}
          >
          {
            article.tags.indexOf('favorites') > -1 ? (
              <FavChecked />
            ) : (
              <Fav />
            )
          }
          </EditItem>

          <EditItem
            bg={article.tags.indexOf('inprogress') > -1}
            disabled={highlight || comment}
            onClick={() => this.toggleTag('inprogress')}
          >
          {
            article.tags.indexOf('inprogress') > -1 ? (
              <InProgressChecked />
            ) : (
              <InProgress />
            )
          }
          </EditItem>

          <EditItem             
            bg={article.tags.indexOf('reminder') > -1}
            disabled={highlight || comment}
            onClick={() => this.toggleTag('reminder')}>
            {
              article.tags.indexOf('reminder') > -1 ? (
                <ReminderChecked />
              ) : (
                <Reminder />
              )
            }
          </EditItem>
       
          <EditItem
            bg={article.tags.indexOf('archive') > -1}
            disabled={highlight || comment}
            onClick={() => this.toggleTag('archive')}
            >
            {
              article.tags.indexOf('archive') > -1 ? (
                <ArchiveChecked />
              ) : (
                <Archive />
              )
            }
          </EditItem>
          <EditItem />



          {/* {highlight &&
            <EditItem highlight onClick={this.save} />
          }
          {!highlight &&
            <EditItem highlight disabled={comment} onClick={() => this.setState({ highlight: true })} />
          }
          {comment &&
            <EditItem comment onClick={this.save} />
          }
          {!comment &&
            <EditItem comment disabled={highlight} onClick={() => this.setState({ comment: true })} />
          }
          <EditItem members disabled={highlight || comment} /> */}


        </EditBox>
        {/* this.state.edit &&
          <textarea style={{ width: '100%', height: 400 }}>
            {article.content}
          </textarea>
        */}
        {/* {this.state.edit &&
          <div style={{ border: '1px solid gray', minHeight: 300 }}>
            <Editor
              value={article.content}
            />
          </div>
        } */}
        <Source href={article.url} target="_blank">Source</Source>
      </ArticleWrapper>
      // </div>
    );
  }
}

Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
  article: PropTypes.object,
  sidebarStatus: PropTypes.bool.isRequired,
};

Article.defaultProps = {
  article: { title: null, content: null },
};

function mapStateToProps(state) {
  return {
    article: state.articles.article,
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Article);
