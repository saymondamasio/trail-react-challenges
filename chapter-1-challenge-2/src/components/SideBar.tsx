import { memo } from "react";
import { Button } from "./Button";

interface Genre {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

interface Props {
  genres: Genre[]
  handleClickButton: (id: number) => void
  selectedGenreId: number
}

function SideBarComponent({genres, handleClickButton, selectedGenreId}:Props) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}

export const SideBar = memo(SideBarComponent);