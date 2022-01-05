import React, { useEffect, useMemo, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { theme } from 'themes';

export const classes = {
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#DADADA',
    borderStyle: 'dashed',
    color: '#828282',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    marginTop: '12px',
    height: '172px'
  },

  active: {
    borderColor: theme.palette.success.main
  },

  accept: {
    borderColor: '#00e676'
  },

  reject: {
    borderColor: theme.palette.error.main
  },
  btnUpload: {
    fontWeight: 500,
    marginBottom: '12px',
    color: theme.palette.secondary.main,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.palette.secondary.main,
    borderStyle: 'solid',
    minHeight: '38px',
    minWidth: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  thumb: {
    display: 'inline-flex',
    justifyContent: 'center',
    borderRadius: 4,
    border: '1px solid #eaeaea',
    marginRight: 8,
    width: 120,
    height: 120,
    padding: 4
  },

  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  },

  img: {
    display: 'block',
    width: 'auto',
    height: '100%'
  }
};

export const RHFUpload = props => {
  const [files, setFiles] = useState<any[]>([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/jpeg, image/png, .pdf, video/mp4',
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });
  const style = useMemo(
    () => ({
      ...classes.root,
      ...(isDragActive ? classes.active : {}),
      ...(isDragAccept ? classes.accept : {}),
      ...(isDragReject ? classes.reject : {})
    }),
    [isDragActive, isDragReject, isDragAccept]
  ) as any;

  const thumbs = files.map((file, i) => {
    if (!file) return;
    return (
      <div key={i} style={classes.thumb}>
        <div style={classes.thumbInner}>
          <img src={file?.preview} style={classes.img} />
        </div>
      </div>
    );
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div style={classes.btnUpload}>Upload</div>
        <Typography variant="caption">or drag and drop</Typography>
      </div>
      <Stack direction="row" justifyContent="space-between" mt={1}>
        <aside style={classes.thumbsContainer as any}>{thumbs}</aside>
        <Typography variant="body2" sx={{ color: theme.palette.text.disabled }}>
          jpg. png. pdf. mp4
        </Typography>
      </Stack>
    </section>
  );
};
