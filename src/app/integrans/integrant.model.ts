export interface Integrant {
  id: string;
  nom: string;
  nomArtistic: string[];
  biografia: string;
  foto: string;
  videoMusical: string;
  infoAlbum: {
    nom: string;
    any: string;
    descripcio: string;
  };
  portadaAlbumFamoso: string;
  album: string;
}