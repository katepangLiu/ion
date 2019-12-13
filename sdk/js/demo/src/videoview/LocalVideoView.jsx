import React from "react";
import { setTimeout } from "timers";
import MicrophoneIcon from "mdi-react/MicrophoneIcon";
import MicrophoneOffIcon from "mdi-react/MicrophoneOffIcon";
import VideoIcon from "mdi-react/VideoIcon";
import VideocamOffIcon from "mdi-react/VideocamOffIcon";

class LocalVideoView extends React.Component {
  componentDidMount = () => {
    const { stream } = this.props;
    this.video.srcObject = stream.stream;
  };

  render = () => {
    const { id, label, audioMuted, videoMuted } = this.props;
    return (
      <div className="local-video-layout">
        <div className="local-video-container">
          <video
            ref={ref => {
              this.video = ref;
            }}
            id={id}
            autoPlay
            playsInline
            muted={true}
            className="local-video-size"
          />
          <div className="local-video-icon-layout">
            {
              audioMuted ? <MicrophoneOffIcon size={18} color="white"/> : ""
            }
            {
              videoMuted ? <VideocamOffIcon size={18} color="white"/> :""
            }
            
          </div>
          <a className="local-video-name">
            {label}
          </a>
        </div>
      </div>
    );
  };
}

export default LocalVideoView;
