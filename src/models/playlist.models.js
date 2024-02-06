<<<<<<< HEAD
import mongoose, { Schema } from 'mongoose'

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
  },
  { timestamps: true }
)

export const Playlist = mongoose.model('Playlist', playlistSchema)
=======
import mongoose, { Schema } from 'mongoose'

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
  },
  { timestamps: true }
)

export const Playlist = mongoose.model('Playlist', playlistSchema)
>>>>>>> 70857d0b1e22b5a4f500ddec480e2d1b1f768775
