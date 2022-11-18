import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {

  function handleRemoveComment(){
    console.log("deletado", content)

    onDeleteComment(content)
  }
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/alexsantosjr.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:10">
                Certa de 1h atrás
              </time>
            </div>

            <button onClick={handleRemoveComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
