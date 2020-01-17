# Buffering responses

To force buffering of response bodies as `res.text` you may invoke `req.buffer()`. To undo the default of buffering for text responses such as "text/plain", "text/html" etc you may invoke `req.buffer(false)`.

When buffered the `res.buffered` flag is provided, you may use this to handle both buffered and unbuffered responses in the same callback.
