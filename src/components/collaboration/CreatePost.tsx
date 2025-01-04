import React from 'react';
import { Image, Send, X } from 'lucide-react';

interface CreatePostProps {
  onPost: (content: string, image?: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPost }) => {
  const [content, setContent] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [isPreview, setIsPreview] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onPost(content, imageUrl);
      setContent('');
      setImageUrl('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts on fashion trends..."
          className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          rows={3}
        />
        
        {imageUrl && (
          <div className="relative mt-2">
            {isPreview && (
              <>
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setImageUrl('')}
                  className="absolute top-2 right-2 p-1 bg-gray-900 bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-3">
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => {
                const url = window.prompt('Enter image URL:');
                if (url) {
                  setImageUrl(url);
                  setIsPreview(true);
                }
              }}
              className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <Image className="w-4 h-4 mr-2" />
              Add Image
            </button>
          </div>
          <button
            type="submit"
            disabled={!content.trim()}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4 mr-2" />
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;