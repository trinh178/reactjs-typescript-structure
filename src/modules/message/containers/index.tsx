/**
 * Structure file requried
 */
import React, {
    ChangeEvent, useState,
} from 'react';
import { useAppDispatch, useAppSelector } from 'app/redux/hook';
import { reduxSliceActions } from 'modules/message';

interface MessageProps {

}

const Message: React.FC<MessageProps> = () => {
    const dispatch = useAppDispatch();
    const textList = useAppSelector((state) => state.message.messageList);
    const [text, setText] = useState('');

    // Events
    const OnTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    };
    const OnTextSubmit = () => {
        dispatch(reduxSliceActions.pushMessage(text));
        setText('');
    };

    return (
        <div
            className="container row m-0 p-0"
        >
            <div
                className="col-12 row m-0 p-0"
            >
                <input
                    className="col-10 h-100 m-0 p-0"
                    type="text"
                    value={text}
                    onChange={OnTextChange}
                />
                <div
                    className="col-2 btn btn-primary h-100 m-0 p-0"
                    onClick={OnTextSubmit}
                    aria-hidden="true"
                >
                    Submit
                </div>
            </div>
            <div
                className="col-12 row m-0 p-2 mt-2 bg-white overflow-scroll"
                style={{
                    height: '300px',
                }}
            >
                <div>
                    {textList.map((t) => (
                        <div key={t}>
                            {t}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Message;
