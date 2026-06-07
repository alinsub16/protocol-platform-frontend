export interface Comment {
  id: number;
  parent_id: number | null;
  body: string;
  votes_count: number;
}

export interface CommentNode extends Comment {
  replies: CommentNode[];
}

export const buildCommentTree = ( comments: Comment[] ): CommentNode[] => {
  const map: Record<number, CommentNode> = {};
  const roots: CommentNode[] = [];

  // Step 1: create map
  comments.forEach((c) => {
    map[c.id] = { ...c, replies: [] };
  });

  // Step 2: build tree
  comments.forEach((c) => {
    if (c.parent_id) {
      map[c.parent_id]?.replies.push(map[c.id]);
    } else {
      roots.push(map[c.id]);
    }
  });

  return roots;
};